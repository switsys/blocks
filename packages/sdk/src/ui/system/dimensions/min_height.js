// @flow
import {system, Config} from '@styled-system/core';
import {type MinHeightProperty} from '../utils/csstype';
import {type Prop, type Length} from '../utils/types';
import createStylePropTypes from '../utils/create_style_prop_types';

export type MinHeightProps = {|
    minHeight?: Prop<MinHeightProperty<Length>>,
|};

export const config: Config = {
    minHeight: {
        property: 'minHeight',
        scale: 'dimensions',
    },
};

export const minHeight = system(config);
export const minHeightPropTypes = createStylePropTypes(minHeight.propNames);