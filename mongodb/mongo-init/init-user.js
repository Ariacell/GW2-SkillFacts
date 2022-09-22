db.createUser(
    {
        user: process.env.SKILLS_DB_USER_USERNAME,
        pwd: process.env.SKILLS_DB_USER_PASSWORD,
        roles: [
            {
                role: "readWrite",
                db: "skills"
            }
        ]
    }
);