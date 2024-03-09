import styles from './SkillInput.module.css';

const SkillInput = ({ i, skill, filterInputSkillTextHandler, value, selectSkillHandler }) => {
  return <div className={`${styles.customSelect}`}>
    <input type="text"
      placeholder={`${i + 1}. Add skill`}
      name={skill}
      onChange={filterInputSkillTextHandler}
      value={value}
      // onBlur={selectSkillHandler}
    />
  </div>
}

export default SkillInput;