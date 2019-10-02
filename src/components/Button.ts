import styled from 'styled-components';

export default styled.button`
  flex: 1;
  margin: 0;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem .25rem .25rem 0.25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  background-color: #fff;
  border: 1px solid #6c757d;
  &:not(:disabled) {
    cursor: pointer;
    color: #fff;
    background-color: #c8102e;
    border: 1px solid #c8102e;
  }
  &:disabled {
    opacity: .65;
  }
`;
