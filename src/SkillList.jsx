function SkillList(){
    const skill = ['HTML', 'PHP', 'CSS'];
    return(
        <div>
            <h2>My Skills ({skill.length})</h2>

            <ul>
                {skill.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}
export default SkillList

