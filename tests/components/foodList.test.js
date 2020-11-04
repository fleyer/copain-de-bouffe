import { h } from 'preact';
import FoodList from '../../src/components/foodList';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

const elems = [
    {name: 'test1'},
    {name: 'test2'}
]

describe('Initial Test of the FoodList', () => {
	test('FoodList 2 Link items', () => {
		const context = shallow(<FoodList elems={elems}/>);
		expect(context.find('Link').length).toBe(2);
	});
});
