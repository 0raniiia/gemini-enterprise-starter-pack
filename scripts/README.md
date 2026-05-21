# Scripts

## setup_drive.gs — Google Apps Script

Automatically creates the full Google Drive folder structure for the GE Starter Pack.

### How to run
1. Go to [script.google.com](https://script.google.com)
2. Create a new project → paste the contents of `setup_drive.gs`
3. Edit `CLIENT_NAME` at line ~20 (or leave as "Template" for a generic version)
4. Click ▶ Run → select `createGEStarterPackStructure`
5. Authorize Drive permissions when prompted
6. Wait ~60 seconds → your full Drive structure is created automatically

### What it creates
- 9 top-level folders (Get Started + 6 métiers + Ambassador Kit + Resources)
- ~55 Google files (Docs, Sheets, Slides) with correct names
- An INDEX document with links to every file
