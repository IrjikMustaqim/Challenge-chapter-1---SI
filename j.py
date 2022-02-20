import requests


c = requests.get("https://www.google.com")
print(c.headers)