from bs4 import Tag

tags = ".reflist, .references, .navbox, .mw-references-wrap, #References, #External_links, #Further_reading, #Notes, #Bibliography, #Sources"

def cleanup(content: Tag | None) -> None:
    if not content: return
    for noise in content.select(tags):
        noise.decompose()
