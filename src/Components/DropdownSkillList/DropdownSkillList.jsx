import styles from './DropdownSkillList.module.css'

const DropDownSkillList = ({ filteredSkills, selectSkillHandler }) => {
  return (
    <>
      {filteredSkills.length > 0 && <ul className={`${styles.dropDownSkillList}`}>
        {filteredSkills.map(skill => (
          <li className={`${styles.dropDownSkillListItem}`}
            key={skill}
            onClick={selectSkillHandler}>
            {skill}
          </li>
        ))}
      </ul>
      }
    </>
  )
}

export default DropDownSkillList;