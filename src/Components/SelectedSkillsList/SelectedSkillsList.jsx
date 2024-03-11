import { useState } from 'react';

import Delete from '../Delete';
import SkillInput from '../SkillInput/SkillInput';
import SuggestedSkills from '../SugegestedSkills/SugegestedSkills';
import DropDownSkillList from '../DropdownSkillList/DropdownSkillList';

import skillList from '../../skillList.json';

import styles from './SelectedSkillsList.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SelectedSkillsList = () => {
  const suggestedSKillsList = ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Vue', 'Angular'];
  const [selectedSkillList, setSelectedSkillList] = useState({
    firstSkill: [null, '', false],
    secondSkill: [null, '', false],
    thirdSkill: [null, '', false],
    fourthSkill: [null, '', false],
    fifthSkill: [null, '', false]
  });
  const [filteredSkills, setFilteredSkills] = useState([]);

  const selectSkillHandler = (e) => {
    const listItemValue = e.currentTarget.textContent;
    // const selectedSkill = e.target.value.toLowerCase();
    // const hadSkillAreadyBeenAdded = Object.values(selectedSkillList)
    //   .map(skill => skill.toLowerCase())
    //   .filter(skill => skill)
    //   .includes(selectedSkill);
    // if (hadSkillAreadyBeenAdded) {
    //   console.log('This skill already have been added');
    // } else {
    //   setSelectedSkillList(oldState => (
    //     { ...oldState, [e.target.name]: [selectedSkill, ''] }
    //   ));
    // }
  }

  const addSugestedSkillHandler = (e) => {
    const selectedSkill = e.currentTarget.textContent;
    const skillValues = Object.values(selectedSkillList);
    const emptyValuesLen = skillValues
      .filter(value => value[0] !== null)
      .length >= 5;
    const hadSkillAreadyBeenAdded = skillValues
      .filter(skill => skill[0] !== null)
      .map(subArr => subArr[0])
      .includes(selectedSkill);

    if (emptyValuesLen) {
      console.log('Can\'t add more skills');
    } else if (hadSkillAreadyBeenAdded) {
      console.log('This skill already have been added');
    } else {
      setSelectedSkillList(oldState => {
        const emptyValue = Object.entries(oldState).find(el => el[1][0] === null)[0];
        return { ...oldState, [emptyValue]: [selectedSkill, '', false] }
      });
    }
  }

  const deleteSkillHandler = (e) => {
    const skillToBeDeleted = e.currentTarget.parentNode.classList[1];
    setSelectedSkillList(oldState => (
      { ...oldState, [skillToBeDeleted]: [null, '', false] }
    ));
  }

  const filterInputSkillTextHandler = (e) => {
    const selectedSkill = e.target.value;
    setSelectedSkillList(oldState => (
      { ...oldState, [e.target.name]: [null, selectedSkill, true] }
    ))
    const matches = skillList.filter(skill => skill.toLowerCase().includes(selectedSkill.toLowerCase()));
    setFilteredSkills(matches);
    return matches;
  }

  const decideIfInputNeedsToBeDisabled = () => Object.values(selectedSkillList).map(skill => skill[0]).indexOf(null)

  return (
    <>
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
                  value={selectedSkillList[skill][1]}
                  filterInputSkillTextHandler={filterInputSkillTextHandler}
                  decideIfInputNeedsToBeDisabled={decideIfInputNeedsToBeDisabled}
                  list={<DropDownSkillList
                    i={i}
                    filteredSkills={filteredSkills}
                    selectSkillHandler={selectSkillHandler}
                    isListActive={selectedSkillList[skill][2]} />}
                />
              }
            </li>
          )}
        </ul>
        <SuggestedSkills suggestedSKillsList={suggestedSKillsList} addSugestedSkillHandler={addSugestedSkillHandler} />
      </section>
    </>
  )
}

export default SelectedSkillsList;