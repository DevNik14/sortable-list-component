import styles from './DropdownSkillList.module.css'

const DropDownSkillList = ({ i, filteredSkills, selectSkillHandler, decideIfInputNeedsToBeDisabled }) => {

  return (
    <>
      {filteredSkills.length > 0 &&
        <ul className={`${styles.dropDownSkillList} 
      ${!(i > decideIfInputNeedsToBeDisabled.call(null)) && styles.active}`}>
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