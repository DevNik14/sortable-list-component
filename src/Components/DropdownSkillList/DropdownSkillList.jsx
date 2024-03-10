import styles from './DropdownSkillList.module.css'

const DropDownSkillList = ({ filteredSkills }) => {
  return (
    <ul className={`${styles.dropDownSkillList}`}>
      {filteredSkills.length > 0 && filteredSkills.map(skill => (
        <li className={`${styles.dropDownSkillListItem}`} key={skill}>{skill}</li>
      ))}
    </ul>
  )
}

export default DropDownSkillList;