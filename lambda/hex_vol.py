import json
import numpy as np
from scipy.spatial import ConvexHull


def calculate_volume():
    points = np.array(input)
    hull = ConvexHull(points)
    return hull.volume

def lambda_handler(event, context):
    return {
        "statusCode": 200,
        'headers': {
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({
            "message": "hello world",
        }),
    }
