import React, {useState} from "react";
import { connect } from "react-redux";
import {setKeyword} from '../redux/actions';

const Keyword = ({keyword = '', setKeyword }) => {
  const [value, setValue] = useState(keyword);

  function updateKeyword(event) {
    setValue(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div>
      <input onChange={updateKeyword} value={value} />
    </div>
  );
};

const mapStateToProps = state => {
  return { keyword: state.keyword };
};

export default connect(mapStateToProps, { setKeyword })(Keyword);
