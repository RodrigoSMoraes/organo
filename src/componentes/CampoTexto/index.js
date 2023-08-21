import styled from 'styled-components';

const CampoTextoContainer = styled.div`
  margin: 24px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 24px;
`;

const Input = styled.input`
  background-color: #FFF;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  border: none;
  font-size: 24px;
  padding: 24px;
  box-sizing: border-box;
`;

const CampoTexto = (props) => {
  const aoDigitar = (e) => {
    props.aoAlterado(e.target.value);
  }

  return (
    <CampoTextoContainer>
      <Label>{props.label}</Label>
      <Input value={props.valor} onChange={aoDigitar} required={props.required} placeholder={props.placeholder} />
    </CampoTextoContainer>
  );
}

export default CampoTexto;
