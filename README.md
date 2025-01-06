# PollingApp
A web-based application that enables users to participate in polls and allows administrators to manage polls efficiently.

## **Features**

1. Public Site
- View Polls: Users can browse all available polls.
- Vote: Users can vote on polls in real-time.
- Responsive Design: Accessible on desktop and mobile devices.

2. Admin Site
- Create Polls: Add new polls with options for voting.
- Edit Polls: Modify existing polls and their options.
- Delete Polls: Remove outdated or irrelevant polls.
- View Results: Monitor live voting results.

## **Installation**

- Prerequisites
- Python 3.x (required)
- Django Framework (or equivalent backend)
- SQLite (default database, or any preferred database)
- Node.js and npm (for frontend dependencies, if applicable)

## **Steps**
1. Clone the repository:
- git clone https://github.com/phionanamugga/polling-app.git
- cd polling-app

2. Set up a virtual environment:
- python -m venv venv
- source venv/bin/activate   # For Windows, use `venv\Scripts\activate`

3. Install dependencies:
- pip install -r requirements.txt

4. Apply migrations to set up the database:
- python manage.py migrate

5. Start the development server:
- python manage.py runserver

6. Access the app:
- Public site: http://localhost:8000
- Admin site: http://localhost:8000/admin

## **Usage**

1. Public Site
- Navigate to the public URL.
- View the list of active polls.
- Select a poll and submit your vote.
- Optionally, view the results of the poll (if allowed).

2. Admin Site
- Log in using admin credentials at /admin.
- Use the Polls section to manage polls:
- Add: Create a new poll with a question and multiple options.
- Change: Edit existing poll details or options.
- Delete: Remove polls no longer needed.
- Monitor voting progress and results in real-time.

## **Configuration**
1. Environment Variables
Create a .env file in the project root to customize settings:

DEBUG=True
SECRET_KEY=your_secret_key
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=localhost,127.0.0.1
2. Customization
To customize the appearance, modify templates in the templates directory and static files in the static directory.

3. **API Endpoints**

For integration or advanced usage, here are the API endpoints:

Public
GET /polls/: Retrieve all active polls.
POST /polls/<poll_id>/vote/: Submit a vote.
Admin
POST /admin/polls/add/: Add a new poll.
PUT /admin/polls/<poll_id>/: Edit a poll.
DELETE /admin/polls/<poll_id>/: Delete a poll.

4. **Tests**

Run tests to ensure the app functions as expected:

python manage.py test

5. **Contributing**

Contributions are welcome! Please:

Fork the repository.
Create a feature branch.
Commit your changes.
Submit a pull request.

6. **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

MIT License

Copyright (c) [2024] [Polling_App]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

7. **Contact**

For support or inquiries, contact pollingapp@example.com.