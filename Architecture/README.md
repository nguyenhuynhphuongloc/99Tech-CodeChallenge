
#  Scoreboard Module

# 1. Overview

- The Scoreboard Module provides top 10 users based on their scores, which allows user to update their score after completing actions and making sure that the score board is always live and accurate

# 2. Actors
-  User: Completes actions to update points and views the score board.    
-  Backend System: Validates score updates, updates the database, and maintains the score board.

# Resource Definition
The resource is `UserScore`

class UserScore {
  id!: string;        // Unique user ID
  userName!: string;  // User name
  score!: number;     // current score
  updatedAt!: Date;   // latest update
}

# Functional Requirements

+ Update User Score: Update a user's score after completing an action.

+ Get Top 10 Users: Fetch top 10 users sorted by score (descending).

+ Live score board Updates: update score board in real time

# Non-Functional Requirements

+ Authorization & Validation: Authenticate user before updating scores

# API Endpoints
1. Update User Score
Method: POST
Endpoint: /scores/update
Description: Update a user's score after completing an action.

Error Responses: 400 Bad Request → invalid scoreDelta , 401 Unauthorized → user not authenticated


# 2. Get Top 10 Users

Method: GET

Endpoint: /scores/top

Description: Get top 10 users sorted by score descending.

Request Body: None

Response (200 OK)

# 3.Live Scoreboard Updates

# Suggestions

+ Use Redis or in-memory cache for fast leaderboard computation.

+ Implement WebSocket or SSE for real-time updates.

+ Maintain audit logs of score changes for security and analytics.

# Diagram illustrate the flows

![HomePage](./image/image1.png)


