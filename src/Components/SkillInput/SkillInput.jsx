import styles from './SkillInput.module.css';

const SkillInput = ({ i, skill, value, selectSkillHandler, filterInputSkillTextHandler }) => {
  return <div className={`${styles.customSelect}`}>
    <input type="text"
      placeholder={`${i + 1}. Add skill`}
      name={skill}
      onChange={filterInputSkillTextHandler}
      value={value}
    />
  </div>
}

export default SkillInput;