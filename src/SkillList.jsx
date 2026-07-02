function SkillList() {
    const skills = ['HTML', 'CSS', 'React'];    
    return(
        <div>
            <h2>My Skills (I know 3 Skills)</h2>
            <ul>
                <li>{skills[0]}</li>
                <li>{skills[1]}</li>
                <li>{skills[2]}</li>
            </ul>
        </div>
    )
} export default SkillList