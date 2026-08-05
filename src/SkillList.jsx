function SkillList() {
    const skills = ['HTML', 'CSS', 'React'];    
    return(
        <div>
            <h2>My Skills (I know 3 Skills)</h2>
            <ul>
                {skills.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
} export default SkillList