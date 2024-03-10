import DropDownSkillList from '../DropdownSkillList/DropdownSkillList';

import skillList from '../../skillList.json';

import styles from './SkillInput.module.css';
import { useState } from 'react';

const SkillInput = ({ i, skill, value, selectSkillHandler }) => {
  const [filteredSkills, setFilteredSkills] = useState([]);

  const filterInputSkillTextHandler = (e) => {
    const selectedSkill = e.target.value;
    const matches = skillList.filter(skill => skill.toLowerCase().includes(e.target.value.toLowerCase()));
    return matches;
  }

  return <div className={`${styles.customSelect}`}>
    <input type="text"
      placeholder={`${i + 1}. Add skill`}
      name={skill}
      onChange={filterInputSkillTextHandler}
      value={value}
    />
    <DropDownSkillList filteredSkills={filteredSkills}/>
  </div>
}

export default SkillInput;