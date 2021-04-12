import json
import numpy as np
from scipy.spatial import ConvexHull
import logging


def calculate_volume(vertex):
    points = np.array(vertex)
    hull = ConvexHull(points)
    return hull.volume

def process_input(event):
    error = ""
    if not "body" in event or not "extent" in event["body"]:
        error ='input error! no body nor no extent in body:' + str(event)
        return False, "",error
    
    user_input = []
    try:
        extent_dic = eval(event["body"])
        user_input = eval(extent_dic["extent"])
        
        if not (len(user_input) == 2 and
                len(user_input[0]) == 4 and
                len(user_input[1]) == 4 ):
            raise SyntaxError("Invalid syntax in user input list")
    except Exception as e:
        error = 'json load error:' + str(e)
        return False, "",error
    
    
    return True, [ vertex for surface in user_input for vertex in surface], ""


def lambda_handler(event, context):
    print(event)
    
    ok, input, error = process_input(event)
    if ok:
        volume = calculate_volume(input)
        body = json.dumps({ "volume": volume })
        result = '[SUCCESS]'
    else:
        body = json.dumps({ "error": error })
        result = '[ERROR]'
        
    print(result, body)
        
    return {
        "statusCode": 200,
        'headers': {
            "Access-Control-Allow-Origin": "*",
            "Content-Type":"application/json"
        },
        "body": body
    }
