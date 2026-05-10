from bs4 import BeautifulSoup
import requests
from utils.cleanup import cleanup

headers = {'User-Agent': 'AppleWebKit/537.36'}

def scrape_infobox(url) -> dict:
    response = requests.get(url, headers=headers).text
    soup = BeautifulSoup(response, "html.parser")
    box = soup.find("table", class_="infobox")

    if not box: return {}

    cleanup(box)

    infobox = {}
    for row in box.find_all("tr"):
        th = row.find("th")
        td = row.find("td")
        if th and td:
            key = th.get_text(separator=" ", strip=True)
            value = td.get_text(separator=" ", strip=True)
            infobox[key] = value

    return infobox