/**
 * Backend for asset nodes which extends the basic type to provide support for the COLLADA XML format
 *
 * @param cfg
 */

SceneJs.backends.installBackend(
        (function() {

            return SceneJs.assetBackend({

                /** All asset backends have an type ID of this form:
                 * "asset." concatenated with the target file extension
                 */
                type: 'asset.dae',

                /** Parses COLLADA XML into a scene node
                 */
                parse: function(data) {
                    return SceneJs.objects.teapot({}); // Stub
                }
            });
        })()
        )
        ;

