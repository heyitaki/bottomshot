from pprint import pprint

import requests


def get_moment_data(url):
    print("url", url)
    set_id, play_id = topshot_url_to_ids(url)
    print("set_id", set_id, len(set_id))
    print("play_id", play_id, len(play_id))
    payload = construct_payload(set_id, play_id)
    headers = {"content-type": "application/json"}
    r = requests.post(
        "https://api.nbatopshot.com/marketplace/graphql?GetUserMomentListingsDedicated",
        json=payload,
        headers=headers,
    )
    res = r.json()
    print("res", res)
    topshot_data = res["data"]["getUserMomentListings"]["data"]
    print("topshot_data", topshot_data)
    min_price_moment = topshot_data["momentListings"][0]
    moment_data = {
        "circulationCount": topshot_data["circulationCount"],
        "minPrice": topshot_data["priceRange"]["min"],
        "minPriceSerialNumber": min_price_moment["moment"]["flowSerialNumber"],
        "playerName": topshot_data["play"]["stats"]["playerName"],
        "setName": topshot_data["set"]["flowName"],
        "setSeriesNumber": topshot_data["set"]["flowSeriesNumber"],
        "topshotId": min_price_moment["moment"]["id"],
        "url": url,
    }
    return moment_data


def topshot_url_to_ids(url):
    return url.split("/")[-1].split("+")


def construct_payload(set_id, play_id):
    return {
        "operationName": "GetUserMomentListingsDedicated",
        "variables": {"input": {"setID": set_id, "playID": play_id}},
        "query": "query GetUserMomentListingsDedicated($input: GetUserMomentListingsInput!) {\n  getUserMomentListings(input: $input) {\n    data {\n      circulationCount\n      flowRetired\n      version\n      set {\n        id\n        flowName\n        flowSeriesNumber\n        __typename\n      }\n      play {\n        ... on Play {\n          ...PlayDetails\n          __typename\n        }\n        __typename\n      }\n      assetPathPrefix\n      priceRange {\n        min\n        max\n        __typename\n      }\n      momentListings {\n        id\n        moment {\n          id\n          price\n          flowSerialNumber\n          owner {\n            dapperID\n            username\n            profileImageUrl\n            __typename\n          }\n          setPlay {\n            ID\n            flowRetired\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      momentListingCount\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment PlayDetails on Play {\n  id\n  description\n  stats {\n    playerID\n    playerName\n    primaryPosition\n    currentTeamId\n    dateOfMoment\n    jerseyNumber\n    awayTeamName\n    awayTeamScore\n    teamAtMoment\n    homeTeamName\n    homeTeamScore\n    totalYearsExperience\n    teamAtMomentNbaId\n    height\n    weight\n    currentTeam\n    birthplace\n    birthdate\n    awayTeamNbaId\n    draftYear\n    nbaSeason\n    draftRound\n    draftSelection\n    homeTeamNbaId\n    draftTeam\n    draftTeamNbaId\n    playCategory\n    homeTeamScoresByQuarter {\n      quarterScores {\n        type\n        number\n        sequence\n        points\n        __typename\n      }\n      __typename\n    }\n    awayTeamScoresByQuarter {\n      quarterScores {\n        type\n        number\n        sequence\n        points\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  statsPlayerGameScores {\n    blocks\n    points\n    steals\n    assists\n    minutes\n    rebounds\n    turnovers\n    plusMinus\n    flagrantFouls\n    personalFouls\n    playerPosition\n    technicalFouls\n    twoPointsMade\n    blockedAttempts\n    fieldGoalsMade\n    freeThrowsMade\n    threePointsMade\n    defensiveRebounds\n    offensiveRebounds\n    pointsOffTurnovers\n    twoPointsAttempted\n    assistTurnoverRatio\n    fieldGoalsAttempted\n    freeThrowsAttempted\n    twoPointsPercentage\n    fieldGoalsPercentage\n    freeThrowsPercentage\n    threePointsAttempted\n    threePointsPercentage\n    __typename\n  }\n  statsPlayerSeasonAverageScores {\n    minutes\n    blocks\n    points\n    steals\n    assists\n    rebounds\n    turnovers\n    plusMinus\n    flagrantFouls\n    personalFouls\n    technicalFouls\n    twoPointsMade\n    blockedAttempts\n    fieldGoalsMade\n    freeThrowsMade\n    threePointsMade\n    defensiveRebounds\n    offensiveRebounds\n    pointsOffTurnovers\n    twoPointsAttempted\n    assistTurnoverRatio\n    fieldGoalsAttempted\n    freeThrowsAttempted\n    twoPointsPercentage\n    fieldGoalsPercentage\n    freeThrowsPercentage\n    threePointsAttempted\n    threePointsPercentage\n    __typename\n  }\n  __typename\n}\n",
    }
