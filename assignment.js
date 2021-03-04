const validSkills = ["CSS", "Javascript", "React", "Apache Flink", "Zookeeper"];

const userOne = {
    id: 1,
    skills: ["Javascript"]
};

 const validateSkills = (skills) => {

    for (const skill of skills) {

        if (!validSkills.includes(skill)) {

            throw new Error("Invalid skill");

        }

    }

};

const addSkillsToUser = (user, skills) => {

    validateSkills(skills);

    for (const skill of skills) {

        if (user.skills.includes(skill)) {

            throw new Error("User already has skill");

        }

    }

    return {

        ...user,

        skills: [...user.skills, ...skills].sort()

    };

};

module.exports ={validSkills,userOne ,validateSkills,addSkillsToUser};