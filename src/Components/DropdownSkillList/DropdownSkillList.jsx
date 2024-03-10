const DropDownSkillList = ({ filteredSkills }) => {
  return (
    <ul>
      {filteredSkills.length > 0 && filteredSkills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  )
}

export default DropDownSkillList;