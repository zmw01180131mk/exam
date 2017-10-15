var pool=require('./pool');
//获取所有题目类型
function getAllSubjectType(handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql="select * from tbl_exam_subjecttype";
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
                connection.release();
            });
        }
    });
};
//获取所有题目难度系别
function getAllSubjectLevel(handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql="select * from tbl_exam_subjectlevel";
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
                connection.release();
            })
        }
    })
};
//获取所有的方向
function getAllDepartmentes(handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql="select * from tbl_exam_epartment";
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
                connection.release();
            })
        }
    })
};
//获取所有的知识点
function getAllTopics(handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql="select * from tbl_exam_topic";
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
                connection.release();
            })
        }
    })
};
        // department.id			方向id
	 	// subject.topic.id			知识点id
	 	// subject.subjectType.id			类型id
	 	// subject.subjectLevel.id	
function getAllSubjects(dep,topic,type,level,handler){
           
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{    
            var sql="select * from tbl_exam_subject where department_id="
            +dep+" and topic_id="
            +topic+" and subjectType_id="
            +type+" and subjectLevel_id="
            +level;
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
                connection.release();
            })
        }
    })
};
function checkSubject(id,checkState,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql="update tbl_exam_subject set checkState='"+checkState+"' where id="+id;
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
                connection.release();
            })
        }
    })
}
function getChoice(id,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql="select * from tbl_exam_choice where subject_id="+id;
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
                connection.release();
            })
        }
    })
}
module.exports={
    getAllSubjectType:getAllSubjectType,
    getAllSubjectLevel:getAllSubjectLevel,
    getAllDepartmentes:getAllDepartmentes,
    getAllTopics:getAllTopics,
    getAllSubjects:getAllSubjects,
    checkSubject:checkSubject,
    getChoice:getChoice
}