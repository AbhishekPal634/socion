import json

def clean_instagram_data():
    # Read JSON file
    with open('/vite-project/public/instagram.json', 'r') as file:
        data = json.load(file)

    # Filter out rows with empty values
    cleaned_data = []
    for row in data:
        # Check if any value in the row is empty string or None
        has_empty = any(not str(value).strip() if value is not None else True 
                       for value in row.values())
        
        if not has_empty:
            cleaned_data.append(row)

    # Write cleaned data back to file
    with open('/vite-project/public/instagram.json', 'w') as file:
        json.dump(cleaned_data, file, indent=2)

    print(f"Original rows: {len(data)}")
    print(f"Cleaned rows: {len(cleaned_data)}")
    print(f"Removed {len(data) - len(cleaned_data)} rows with empty values")

if __name__ == "__main__":
    clean_instagram_data()