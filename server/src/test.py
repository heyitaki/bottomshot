from pprint import pprint

from src.topshot import get_moment_data

urls = [
    # "https://www.nbatopshot.com/listings/p2p/208ae30a-a4fe-42d4-9e51-e6fd1ad2a7a9+dc419008-bb89-4522-94a0-fe0f816ef701",
    "https://www.nbatopshot.com/listings/p2p/c561f66b-5bd8-451c-8686-156073c3fb69+f1690178-bd14-4ce0-82ab-06e8ecfd690b",
]
for url in urls:
    pprint(get_moment_data(url))
