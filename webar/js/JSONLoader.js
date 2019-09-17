THREE.JSONLoader = function(e) {
    typeof e == "boolean" && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
    e = undefined),
    this.manager = e !== undefined ? e : THREE.DefaultLoadingManager,
    this.withCredentials = !1
}
,
THREE.JSONLoader.prototype = {
    constructor: THREE.JSONLoader,
    get statusDomElement() {
        return this._statusDomElement === undefined && (this._statusDomElement = document.createElement("div")),
        console.warn("THREE.JSONLoader: .statusDomElement has been removed."),
        this._statusDomElement
    },
    load: function(e, t, n, r) {
        var i = this
          , s = this.texturePath && typeof this.texturePath == "string" ? this.texturePath : THREE.Loader.prototype.extractUrlBase(e)
          , o = new THREE.XHRLoader(this.manager);
        // o.setCrossOrigin(this.crossOrigin),
        o.setWithCredentials(this.withCredentials),
        o.load(e, function(n) {
            var r = JSON.parse(n)
              , o = r.metadata;
            if (o !== undefined) {
                if (o.type === "object") {
                    console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                    return
                }
                if (o.type === "scene") {
                    console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.");
                    return
                }
            }
            var u = i.parse(r, s);
            t(u.geometry, u.materials)
        })
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    setTexturePath: function(e) {
        this.texturePath = e
    },
    parse: function(e, t) {
        function i(t) {
            function r(e, t) {
                return e & 1 << t
            }
            var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M = e.faces, _ = e.vertices, D = e.normals, P = e.colors, H = 0;
            if (e.uvs !== undefined) {
                for (i = 0; i < e.uvs.length; i++)
                    e.uvs[i].length && H++;
                for (i = 0; i < H; i++)
                    n.faceVertexUvs[i] = []
            }
            u = 0,
            a = _.length;
            while (u < a)
                E = new THREE.Vector3,
                E.x = _[u++] * t,
                E.y = _[u++] * t,
                E.z = _[u++] * t,
                n.vertices.push(E);
            u = 0,
            a = M.length;
            while (u < a) {
                p = M[u++],
                d = r(p, 0),
                v = r(p, 1),
                m = r(p, 3),
                g = r(p, 4),
                y = r(p, 5),
                b = r(p, 6),
                w = r(p, 7);
                if (d) {
                    x = new THREE.Face3,
                    x.a = M[u],
                    x.b = M[u + 1],
                    x.c = M[u + 3],
                    T = new THREE.Face3,
                    T.a = M[u + 1],
                    T.b = M[u + 2],
                    T.c = M[u + 3],
                    u += 4,
                    v && (h = M[u++],
                    x.materialIndex = h,
                    T.materialIndex = h),
                    o = n.faces.length;
                    if (m)
                        for (i = 0; i < H; i++) {
                            k = e.uvs[i],
                            n.faceVertexUvs[i][o] = [],
                            n.faceVertexUvs[i][o + 1] = [];
                            for (s = 0; s < 4; s++)
                                c = M[u++],
                                A = k[c * 2],
                                O = k[c * 2 + 1],
                                L = new THREE.Vector2(A,O),
                                s !== 2 && n.faceVertexUvs[i][o].push(L),
                                s !== 0 && n.faceVertexUvs[i][o + 1].push(L)
                        }
                    g && (l = M[u++] * 3,
                    x.normal.set(D[l++], D[l++], D[l]),
                    T.normal.copy(x.normal));
                    if (y)
                        for (i = 0; i < 4; i++)
                            l = M[u++] * 3,
                            C = new THREE.Vector3(D[l++],D[l++],D[l]),
                            i !== 2 && x.vertexNormals.push(C),
                            i !== 0 && T.vertexNormals.push(C);
                    b && (f = M[u++],
                    N = P[f],
                    x.color.setHex(N),
                    T.color.setHex(N));
                    if (w)
                        for (i = 0; i < 4; i++)
                            f = M[u++],
                            N = P[f],
                            i !== 2 && x.vertexColors.push(new THREE.Color(N)),
                            i !== 0 && T.vertexColors.push(new THREE.Color(N));
                    n.faces.push(x),
                    n.faces.push(T)
                } else {
                    S = new THREE.Face3,
                    S.a = M[u++],
                    S.b = M[u++],
                    S.c = M[u++],
                    v && (h = M[u++],
                    S.materialIndex = h),
                    o = n.faces.length;
                    if (m)
                        for (i = 0; i < H; i++) {
                            k = e.uvs[i],
                            n.faceVertexUvs[i][o] = [];
                            for (s = 0; s < 3; s++)
                                c = M[u++],
                                A = k[c * 2],
                                O = k[c * 2 + 1],
                                L = new THREE.Vector2(A,O),
                                n.faceVertexUvs[i][o].push(L)
                        }
                    g && (l = M[u++] * 3,
                    S.normal.set(D[l++], D[l++], D[l]));
                    if (y)
                        for (i = 0; i < 3; i++)
                            l = M[u++] * 3,
                            C = new THREE.Vector3(D[l++],D[l++],D[l]),
                            S.vertexNormals.push(C);
                    b && (f = M[u++],
                    S.color.setHex(P[f]));
                    if (w)
                        for (i = 0; i < 3; i++)
                            f = M[u++],
                            S.vertexColors.push(new THREE.Color(P[f]));
                    n.faces.push(S)
                }
            }
        }
        function s() {
            var t = e.influencesPerVertex !== undefined ? e.influencesPerVertex : 2;
            if (e.skinWeights)
                for (var r = 0, i = e.skinWeights.length; r < i; r += t) {
                    var s = e.skinWeights[r]
                      , o = t > 1 ? e.skinWeights[r + 1] : 0
                      , u = t > 2 ? e.skinWeights[r + 2] : 0
                      , a = t > 3 ? e.skinWeights[r + 3] : 0;
                    n.skinWeights.push(new THREE.Vector4(s,o,u,a))
                }
            if (e.skinIndices)
                for (var r = 0, i = e.skinIndices.length; r < i; r += t) {
                    var f = e.skinIndices[r]
                      , l = t > 1 ? e.skinIndices[r + 1] : 0
                      , c = t > 2 ? e.skinIndices[r + 2] : 0
                      , h = t > 3 ? e.skinIndices[r + 3] : 0;
                    n.skinIndices.push(new THREE.Vector4(f,l,c,h))
                }
            n.bones = e.bones,
            n.bones && n.bones.length > 0 && (n.skinWeights.length !== n.skinIndices.length || n.skinIndices.length !== n.vertices.length) && console.warn("When skinning, number of vertices (" + n.vertices.length + "), skinIndices (" + n.skinIndices.length + "), and skinWeights (" + n.skinWeights.length + ") should match."),
            n.animation = e.animation,
            n.animations = e.animations
        }
        function o(t) {
            if (e.morphTargets !== undefined) {
                var r, i, s, o, u, a;
                for (r = 0,
                i = e.morphTargets.length; r < i; r++) {
                    n.morphTargets[r] = {},
                    n.morphTargets[r].name = e.morphTargets[r].name,
                    n.morphTargets[r].vertices = [],
                    u = n.morphTargets[r].vertices,
                    a = e.morphTargets[r].vertices;
                    for (s = 0,
                    o = a.length; s < o; s += 3) {
                        var f = new THREE.Vector3;
                        f.x = a[s] * t,
                        f.y = a[s + 1] * t,
                        f.z = a[s + 2] * t,
                        u.push(f)
                    }
                }
            }
            if (e.morphColors !== undefined) {
                var r, i, l, c, h, p, d;
                for (r = 0,
                i = e.morphColors.length; r < i; r++) {
                    n.morphColors[r] = {},
                    n.morphColors[r].name = e.morphColors[r].name,
                    n.morphColors[r].colors = [],
                    h = n.morphColors[r].colors,
                    p = e.morphColors[r].colors;
                    for (l = 0,
                    c = p.length; l < c; l += 3)
                        d = new THREE.Color(16755200),
                        d.setRGB(p[l], p[l + 1], p[l + 2]),
                        h.push(d)
                }
            }
        }
        var n = new THREE.Geometry
          , r = e.scale !== undefined ? 1 / e.scale : 1;
        i(r),
        s(),
        o(r),
        n.computeFaceNormals(),
        n.computeBoundingSphere();
        if (e.materials === undefined || e.materials.length === 0)
            return {
                geometry: n
            };
        var u = THREE.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin);
        return {
            geometry: n,
            materials: u
        }
    }
};
