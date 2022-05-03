import uvicorn

if __name__ == '__main__':
    import sys
    dev = False
    try:
        mode = sys.argv[1]
        if mode == 'dev':
            port = 7000
            dev = True
        else:
            print('Running in production mode')
            port = 5000
    except IndexError:
        port = 7000
        dev = False
    finally:
        uvicorn.run('server.main:app',port=port ,reload=dev)