import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button style={{"backgroundColor":props.config.background}}
      className={props.config.classname}
      onClick={() => selectNextBackground({ background: background })}>
      {props.config.label}
    </button>
  )
}
export default ColourSelector;
