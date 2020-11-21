import { h } from 'preact';
import Button from '../../src/components/button';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

const fn = jest.fn()

describe('Button testing', () => {
	test('Expect the onClick handler to be called 1 time', () => {
        const context = shallow(<Button onClick={fn}/>)
        
        context.simulate('click')
        expect(fn).toHaveBeenCalled()
	});
});
