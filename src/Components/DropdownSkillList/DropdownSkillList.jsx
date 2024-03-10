import styles from './DropdownSkillList.module.css'

const DropDownSkillList = ({ filteredSkills }) => {
  return (
    <>
      {filteredSkills.length > 0 && <ul className={`${styles.dropDownSkillList}`}>
        {filteredSkills.map(skill => (
          <li className={`${styles.dropDownSkillListItem}`} key={skill}>{skill}</li>
        ))}
      </ul>
      }
    </>
  )
}

export default DropDownSkillList;