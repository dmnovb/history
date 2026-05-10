import json

from utils.scrape_infobox import scrape_infobox

url = "https://en.wikipedia.org/wiki/Julius_Caesar"
urls = [
    "https://en.wikipedia.org/wiki/Julius_Caesar",
    "https://en.wikipedia.org/wiki/Cleopatra",
    "https://en.wikipedia.org/wiki/Hannibal",
]


def prettify(garbage):
    return json.dumps(scrape_infobox(garbage), ensure_ascii=False, indent=2)


for url in urls:
    print(prettify(url))
    with open(url, "w") as file:
        file.write(prettify(url))
