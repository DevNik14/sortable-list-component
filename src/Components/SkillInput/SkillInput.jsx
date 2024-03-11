import styles from './SkillInput.module.css';

const SkillInput = ({ i, skill, value, filterInputSkillTextHandler, decideIfInputNeedsToBeDisabled }) => {
  return <div className={`${styles.customSelect}`}>
    <input type="text"
      placeholder={`${i + 1}. Add skill`}
      name={skill}
      onChange={filterInputSkillTextHandler}
      value={value}
      disabled={i > decideIfInputNeedsToBeDisabled.call(null)}
    />
  </div>
}

export default SkillInput;