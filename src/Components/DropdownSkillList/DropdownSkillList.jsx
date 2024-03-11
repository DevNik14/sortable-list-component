import styles from './DropdownSkillList.module.css'

const DropDownSkillList = ({ i, filteredSkills, selectSkillHandler, isListActive }) => {

  return (
    <>
      {filteredSkills.length > 0 &&
        <ul className={`${styles.dropDownSkillList} 
      ${isListActive && styles.active}`}>
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