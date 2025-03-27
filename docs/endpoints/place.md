> [!IMPORTANT]
> This documentation is incomplete. I will be adding complete documentation when my schedule allows.

# Endpoint: place

## Endpoint URL

```ruby
https://www.google.com/maps/preview/place
```

## Parameters

- `authuser`: authernticated user id (`0`)

- `hl`: language (`en`)

- `gl`: region (`lk`)

- `pb`: Protobuffer Data (`!1m20!1s0x3ae2599cdc81b377:0x474208b141ed8287!3m15!1m3!1d2897.602952432643!2d79.87687425884405!3d6.9101139243550564!2m3!1f0!2f0!3f0!3m2!1i958!2i918!4f13.1!6m2!1f0!2f0!4m2!3d6.910380211799998!4d79.87802378833295!13m41!2m2!1i408!2i240!3m2!2i10!5b1!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!14m4!1siwXjZ4a6IdbB4-EP37Kr2Q0!3b1!7e81!15i10555!15m49!1m10!4e2!18m7!3b0!6b0!14b1!17b1!20b1!27m1!1b0!20e2!4b1!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!55b1!56m1!1b1!65m5!3m4!1m3!1m2!1i224!2i298!98m3!1b1!2b1!3b1!107m2!1m1!1e1!114m3!1b1!2m1!1b1!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!32b1!37i725`)

## Protocol Buffer Data Breakdown

1.  `1m` - message (20 blocks)

    1.  `1s` - string (0x3ae2599cdc81b377:0x474208b141ed8287)

    2.  `3m` - message (15 blocks)

        1.  `1m` - message (3 blocks)

            1.  `1d` - double (2897.602952432643)

            2.  `2d` - double (79.87687425884405)

            3.  `3d` - double (6.9101139243550564)

        2.  `2m` - message (3 blocks)

            1.  `1f` - float (0)

            2.  `2f` - float (0)

            3.  `3f` - float (0)

        3.  `3m` - message (2 blocks)

            1.  `1i` - 32-bit signed variant integer (958)

            2.  `2i` - 32-bit signed variant integer (918)

        4.  `4f` - float (13.1)

        5.  `6m` - message (2 blocks)

            1.  `1f` - float (0)

            2.  `2f` - float (0)

        6.  `4m` - message (2 blocks)

            1.  `3d` - double (6.910380211799998)

            2.  `4d` - double (79.87802378833295)

        7.  `13m` - message (41 blocks)

            1.  `2m` - message (2 blocks)

                1.  `1i` - 32-bit signed variant integer (408)

                2.  `2i` - 32-bit signed variant integer (240)

            2.  `3m` - message (2 blocks)

                1.  `2i` - 32-bit signed variant integer (10)

                2.  `5b` - boolean (1)

            3.  `7m` - message (33 blocks)

                1.  `1m` - message (3 blocks)

                    1.  `1e` - enum (1)

                    2.  `2b` - boolean (0)

                    3.  `3e` - enum (3)

                2.  `1m` - message (3 blocks)

                    1.  `1e` - enum (2)

                    2.  `2b` - boolean (1)

                    3.  `3e` - enum (2)

                3.  `1m` - message (3 blocks)

                    1.  `1e` - enum (2)

                    2.  `2b` - boolean (0)

                    3.  `3e` - enum (3)

                4.  `1m` - message (3 blocks)

                    1.  `1e` - enum (8)

                    2.  `2b` - boolean (0)

                    3.  `3e` - enum (3)

                5.  `1m` - message (3 blocks)

                    1.  `1e` - enum (10)

                    2.  `2b` - boolean (0)

                    3.  `3e` - enum (3)

                6.  `1m` - message (3 blocks)

                    1.  `1e` - enum (10)

                    2.  `2b` - boolean (1)

                    3.  `3e` - enum (2)

                7.  `1m` - message (3 blocks)

                    1.  `1e` - enum (10)

                    2.  `2b` - boolean (0)

                    3.  `3e` - enum (4)

                8.  `1m` - message (3 blocks)

                    1.  `1e` - enum (9)

                    2.  `2b` - boolean (1)

                    3.  `3e` - enum (2)

                9.  `2b` - boolean (1)

                10. `9b` - boolean (0)

                11. `14m` - message (4 blocks)

                12. `1s` - string (iwXjZ4a6IdbB4-EP37Kr2Q0)

                13. `3b` - boolean (1)

                14. `7e` - enum (81)

                15. `15i` - 32-bit signed variant integer (10555)

                16. `15m` - message (49 blocks)

                17. `1m` - message (10 blocks)

                    1.  `4e` - enum (2)

                    2.  `18m` - message (7 blocks)

                        1.  `3b` - boolean (0)

                        2.  `6b` - boolean (0)

                        3.  `14b` - boolean (1)

                        4.  `17b` - boolean (1)

                        5.  `20b` - boolean (1)

                        6.  `27m` - message (1 blocks)

                            1.  `1b` - boolean (0)

                        7.  `20e` - enum (2)

                    3.  `4b` - boolean (1)

                    4.  `10m` - message (1 blocks)

                        1.  `8e` - enum (3)

                    5.  `11m` - message (1 blocks)

                        1.  `3e` - enum (1)

                    6.  `17b` - boolean (1)

                    7.  `20m` - message (2 blocks)

                        1.  `1e` - enum (3)

                        2.  `1e` - enum (6)

                    8.  `24b` - boolean (1)

                    9.  `25b` - boolean (1)

                    10. `26b` - boolean (1)

                18. `29b` - boolean (1)

                19. `30m` - message (1 blocks)

                    1.  `2b` - boolean (1)

                20. `36b` - boolean (1)

                21. `43b` - boolean (1)

                22. `52b` - boolean (1)

                23. `55b` - boolean (1)

                24. `56m` - message (1 blocks)

                    1.  `1b` - boolean (1)

                25. `65m` - message (5 blocks)

                    1.  `3m` - message (4 blocks)

                        1.  `1m` - message (3 blocks)

                            1.  `1m` - message (2 blocks)

                                1.  `1i` - 32-bit signed variant integer (224)

                                2.  `2i` - 32-bit signed variant integer (298)

                            2.  `98m` - message (3 blocks)

                                1.  `1b` - boolean (1)

                                2.  `2b` - boolean (1)

                                3.  `3b` - boolean (1)

                            3.  `107m` - message (2 blocks)

                                1.  `1m` - message (1 blocks)

                                    1.  `1e` - enum (1)

                                2.  `114m` - message (3 blocks)

                                    1.  `1b` - boolean (1)

                                    2.  `2m` - message (1 blocks)

                                        1.  `1b` - boolean (1)

                                    3.  `22m` - message (1 blocks)

                                        1.  `1e` - enum (81)

                        2.  `29m` - message (0 blocks)

                        3.  `30m` - message (6 blocks)

                            1.  `3b` - boolean (1)

                            2.  `6m` - message (1 blocks)

                                1.  `2b` - boolean (1)

                            3.  `7m` - message (1 blocks)

                                1.  `2b` - boolean (1)

                            4.  `9b` - boolean (1)

                            5.  `32b` - boolean (1)

                            6.  `37i` - 32-bit signed variant integer (725)

                        4.  `38i` - 32-bit signed variant integer (null)
