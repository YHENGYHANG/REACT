function SkillList(){
    const skill = ['HTML', 'PHP', 'CSS'];
    return(
        <div>
            <h2>My Skills (I know 5 Skills)</h2>

            <ul>
                <li>{skill[0]}</li>
                <li>{skill[1]}</li>
                <li>{skill[2]}</li>



            </ul>
        </div>
    )
}
export default SkillList