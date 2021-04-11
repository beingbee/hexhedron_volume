import json
import numpy as np
from scipy.spatial import ConvexHull
import logging


def calculate_volume(vertex):
    points = np.array(vertex)
    hull = ConvexHull(points)
    return hull.volume

def process_input(event):
    # TODO. temporary return only fixed input
    if not "body" in event or not "extent" in event["body"]:
        return False, ""
    
    user_input = []
    try:
        user_input = json.loads(event["body"]["extent"])
        
        if not (len(user_input) == 2 and
                len(user_input[0]) == 4 and
                len(user_input[1]) == 4 ):
            raise SyntaxError
    except:
        return False, ""
    
    
    return True, [ vertex for surface in user_input for vertex in surface] 


def lambda_handler(event, context):
    logging.info(event)
    ok, input = process_input(event)
    if ok:
        volume = calculate_volume(input)
    else:
        volume = 'invalid input'
        
    return {
        "statusCode": 200,
        'headers': {
            "Access-Control-Allow-Origin": "*",
            "Content-Type":"application/json"
        },
        "body": json.dumps({ "volume": volume })
    }
