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

    input = [ [0, 0, 0], [ 0, 1, 0], [1, 0, 0], [1, 1, 0], [0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]]
    # input validation. return exception.
    # convert input to vertex list
    return input


def lambda_handler(event, context):
    logging.info(event)
    input = process_input(event)
    volume = calculate_volume(input)
    return {
        "statusCode": 200,
        'headers': {
            "Access-Control-Allow-Origin": "*"
        },
        "body": {
            "volume": volume
        }
    }
