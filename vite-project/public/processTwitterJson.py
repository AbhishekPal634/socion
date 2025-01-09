import json

# Load the JSON data
with open('/Users/utkarsh/Downloads/RAG_Hackathon/vite-project/public/twitter.json', 'r') as file:
    data = json.load(file)

# Iterate through each tweet and remove the 'text' and 'id' fields
for tweet in data['data']:
    if 'text' in tweet:
        del tweet['text']
    if 'id' in tweet:
        del tweet['id']
    if 'referenced_tweets' in tweet:
        del tweet['referenced_tweets']

# Save the modified JSON data back to the file
with open('/Users/utkarsh/Downloads/RAG_Hackathon/vite-project/public/twitter.json', 'w') as file:
    json.dump(data, file, indent=4)