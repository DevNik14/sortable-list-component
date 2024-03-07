const SkillInput = ({i, skill, filterInputSkillTextHandler, value, selectSkillHandler}) => {
  return <>
    <input type="text"
      placeholder={`${i + 1}. Add skill`}
      name={skill}
      onChange={filterInputSkillTextHandler}
      value={value}
      onBlur={selectSkillHandler}
    />
  </>
}

export default SkillInput;