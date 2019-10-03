import {MockStoreEnhanced} from 'redux-mock-store';
import {searchRepositories} from '../actions/search';
import MockAdapter from 'axios-mock-adapter';
import client from '../apiClient';
import {mockStore} from '../setupTests';
import {ActionTypes} from '../constants/ActionTypes';

const mock = new MockAdapter(client);

describe('Search repositories', () => {
    let store: MockStoreEnhanced<unknown, {}>;

    beforeEach(() => {
        store = mockStore({
            pages: {},
        });
    });

    describe('searchRepositories action creator', () => {
        it('dispatches SEARCH_REPOSITORIES action and returns data on success', async () => {
            // tslint:disable:object-literal-key-quotes quotemark trailing-comma
            mock
                .onGet('/search/repositories').reply(200, {
                "total_count": 27111,
                "items": [
                    {
                        "full_name": "chvin/react-tetris",
                        "owner": {
                            "login": "chvin",
                            "avatar_url": "https://avatars2.githubusercontent.com/u/5383506?v=4",
                            "url": "https://api.github.com/users/chvin",
                        },
                        "description": "Use React, Redux, Immutable to code Tetris. 🎮",
                        "url": "https://api.github.com/repos/chvin/react-tetris",
                        "stargazers_count": 5592,
                        "language": "JavaScript",
                    },
                    {
                        "full_name": "Binaryify/vue-tetris",
                        "owner": {
                            "login": "Binaryify",
                            "avatar_url": "https://avatars1.githubusercontent.com/u/12221718?v=4",
                            "url": "https://api.github.com/users/Binaryify",
                        },
                        "url": "https://api.github.com/repos/Binaryify/vue-tetris",
                        "stargazers_count": 1966,
                        "language": "JavaScript",
                    }
                ]
            })
                .onAny().reply(500, 'call not mocked');
            // tslint:enable

            await store.dispatch(searchRepositories({
                query: 'tetris',
            }));
            const actions = store.getActions();

            expect.assertions(4);
            expect(actions[0].type).toEqual(ActionTypes.SEARCH_REPOSITORIES);
            expect(actions[1].type).toEqual(ActionTypes.SEARCH_REPOSITORIES_SUCCESS);
            expect(actions[1].payload.data.items[0].full_name).toEqual('chvin/react-tetris');
            expect(actions[1].payload.data.items[1].full_name).toEqual('Binaryify/vue-tetris');
        });

        it('dispatches SEARCH_REPOSITORIES_FAIL on error', async () => {
            mock
                .onGet('/search/repositories').reply(404)
                .onAny().reply(500, 'call not mocked');

            // @ts-ignore
            await store.dispatch(searchRepositories({
                query: 'tetris',
            }));
            const actions = store.getActions();

            expect.assertions(3);
            expect(actions[0].type).toEqual(ActionTypes.SEARCH_REPOSITORIES);
            expect(actions[1].type).toEqual(ActionTypes.SEARCH_REPOSITORIES_FAIL);
            expect(actions[1].error).toBeInstanceOf(Error);
        });
    });

});
