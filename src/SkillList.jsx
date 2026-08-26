<<<<<<< HEAD
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
=======
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
>>>>>>> 02d2d60175daf8cbe230664c8a9001712756ef04
