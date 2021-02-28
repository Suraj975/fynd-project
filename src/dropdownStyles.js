import styled from "styled-components";

export const DropdownWrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* border: 1px solid #f2f2f2; */
  width: 260px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

export const DefaultBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #f2f2f2;
  color: #4d4d4d;
  border-radius: 10px;
  padding: 0px 5px;
  background-color: white;
  font-size: 14px;

  p {
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
  }
`;

export const InputSearch = styled.input`
  height: 40px;
  width: 99%;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  font-size: 15px;
  ::-webkit-input-placeholder {
    padding-left: 10px;
  }
  ::-moz-placeholder {
    padding-left: 10px;
  }
  :-ms-input-placeholder {
    padding-left: 10px;
  }
  :-moz-placeholder {
    padding-left: 10px;
  }
`;

export const ShowDropDown = styled.div`
  text-align: left;
  height: 40px;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  background-color: white;

  p {
    padding: 0px 5px;
    width: 9px;
    text-align: center;
    padding-bottom: 1px;
    background-color: #3a3e45;
    color: white;
  }
`;

export const DropdownRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  height: 40px;
`;

export const Text = styled.div`
  font-weight: ${(p) => (p.checked ? "bold" : "400")};
  color: ${(p) => (p.checked ? "#7A7EC6" : "black")};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
  align-items: center;
  height: 60px;
  background-color: white;
  border-top: 1px solid #f2f2f2;
`;

export const Clear = styled.div`
  margin-right: 30px;
`;

export const Button = styled.button`
background-color: white;
border: none;
font-size:14px;
color:${(p) => (p.buttonType === "submit" ? "#20b387" : "#4D4D4D")};
font-weight:bold;
cursor: pointer;
}
`;

export const DropdownBox = styled.div`
  width: 100%;
  border: 2px solid rgb(242, 242, 242);
  border-top: none;
  margin-top: 5px;
  margin-left: 3px;
  box-shadow: 2px 2px 9px 2px #f2f2f2;
`;

export const ScrollableBox = styled.div`
  max-height: 200px;
  overflow-y: scroll;
  background-color: white;
  &::-webkit-scrollbar {
    background-color: white;
    border-left: 1px solid #f2f2f2;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f2f2f2;
  }
`;

export const Options = styled.div`
  height: 40px;
`;

export const Image = styled.img`
  margin-right: 5px;
`;
