In some cases I want my datasource to be forward-only. In this demo, I detect an index <1 and try to adjust the
index and count based on keeping it forward only.

Two issues:
1. When the page first loads it makes 5 requests to the datasource to load 70+ items.
2. if you scroll down to item > 70 so that it makes one more page and the slowly scroll up, the scroll seems very confused.