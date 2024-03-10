const DropDownSkillList = ({ filteredSkills }) => {
  return (
    <ul>
      {filteredSkills && filteredSkills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  )
}

export default DropDownSkillList;