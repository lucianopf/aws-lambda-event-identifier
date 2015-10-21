exports.eventIdentifier = function(data){
  if(data.source == "aws.events"){
    return "scheduled";
  }
  if(data.awslogs){
    if(data.awslogs.data){
      return "cloudwatch";
    }
  }
  if(data.Records.length>0){
    if(data.Records[0].EventSource == "aws:sns"){
      return "sns";
    }
    if(data.Records[0].eventSource == "aws:dynamodb"){
      return "dynamodb";
    }
    if(data.Records[0].eventSource == "aws:s3"){
      return "s3";
    }
    if(data.Records[0].eventSource == "aws:kinesis"){
      return "s3";
    }
  }
  return null;
}
