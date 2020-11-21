import { h } from 'preact';
import ItemList from '../../src/components/itemList';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

const items = [
    {name: 'test1'},
    {name: 'test2'}
]

describe('Initial Test of the itemList', () => {
	test('ItemList has 2 items', () => {
		const context = shallow(<ItemList items={items}/>);
		expect(context.find('li').length).toBe(2);
	});
});
