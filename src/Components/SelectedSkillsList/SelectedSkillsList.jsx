import { useState } from 'react';

import Delete from '../Delete';
import SkillInput from '../SkillInput/SkillInput';
import SuggestedSkills from '../SugegestedSkills/SugegestedSkills';
import skillList from '../../skillList.json';

import styles from './SelectedSkillsList.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SelectedSkillsList = () => {
  const suggestedSKillsList = ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Vue', 'Angular'];
  const [selectedSkillList, setSelectedSkillList] = useState({
    firstSkill: ['', ''],
    secondSkill: ['', ''],
    thirdSkill: ['', ''],
    fourthSkill: ['', ''],
    fifthSkill: ['', '']
  });

  const skillKeys = Object.keys(skillList);

  const selectSkillHandler = (e) => {
    const selectedSkill = e.target.value;
    if (Object.values(selectedSkillList)[0].includes(selectedSkill)) {
      console.log('This skill already have been added');
    } else {
      setSelectedSkillList(oldState => (
        { ...oldState, [e.target.name]: [selectedSkill, selectedSkill] }
      ));
    }
  }

  const filterInputSkillTextHandler = (e) => {
    const selectedSkill = e.target.value;
    setSelectedSkillList(oldState => (
      { ...oldState, [e.target.name]: ['', selectedSkill] }
    ));
    const matches = skillKeys.map(key =>
      skillList[key].filter(skill => {
        const isMatch = skill.toLowerCase().includes(e.target.value.toLowerCase());
        return isMatch && skill;
        // return <option key={skill} value={skill}>{skill}</option>
      })
    )
    console.log(matches);
  }

  const addSugestedSkillHandler = (e) => {
    const selectedSkill = e.currentTarget.textContent;
    const skillValues = Object.values(selectedSkillList)[0];
    if (skillValues.every(value => value !== '')) {
      console.log('Can\'t add more skills');
      return;
    } else if (skillValues.includes(selectedSkill)[0]) {
      console.log('This skill already have been added');
    } else {
      setSelectedSkillList(oldState => {
        const emptyValue = Object.entries(oldState).find(el => el[1][0] === '')[0];
        return { ...oldState, [emptyValue]: [selectedSkill, ''] }
      });
    }
  }

  const deleteSkillHandler = (e) => {
    const skillToBeDeleted = e.currentTarget.parentNode.classList[1];
    setSelectedSkillList(oldState => (
      { ...oldState, [skillToBeDeleted]: ['', ''] }
    ));
  }

  return (
    <section className={`${styles.selectedSkillsListWrapper}`}>
      <ul className={`${styles.skills}`}>
        {Object.keys(selectedSkillList).map((skill, i) =>
          <li key={skill} className={styles.selectedSkillItem}>
            {selectedSkillList[skill][0]
              ? <div className={`${styles.selectedSkill} ${skill}`}>
                {i + 1}. {selectedSkillList[skill][0]}
                <span onClick={deleteSkillHandler}>
                  <Delete />
                </span>
              </div>
              : <SkillInput
                i={i}
                skill={skill}
                filterInputSkillTextHandler={filterInputSkillTextHandler}
                value={selectedSkillList[skill][1]}
                selectSkillHandler={selectSkillHandler}
              />
            }
          </li>
        )}
      </ul>
      <SuggestedSkills suggestedSKillsList={suggestedSKillsList} addSugestedSkillHandler={addSugestedSkillHandler} />
    </section>
  )
}

export default SelectedSkillsList;