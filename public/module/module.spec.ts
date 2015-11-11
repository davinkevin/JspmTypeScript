/// <reference path="../../typings/tsd.d.ts"/>

/**
 * Created by kevin on 11/11/2015 for JspmTypeScript
 */

import module from 'module';

describe('module', () => {

    it('should be true', () => {
        expect(true).toBe(true);
    });

    it('should have the same name', () => {
        expect(module.name).toBe('module');
    });
});
