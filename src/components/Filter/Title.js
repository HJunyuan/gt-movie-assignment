import { Input } from "rsuite";

function TitleFilter(props) {
	const { value, onChange } = props;

	return <Input onChange={onChange} value={value} />;
}

export default TitleFilter;
